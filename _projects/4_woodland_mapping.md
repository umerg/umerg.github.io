---
layout: page
title: Woodland Monitoring
description: Tree counting, canopy segmentation, and species classification at national scale.
importance: 4
category: research
---

Under a UK Space Agency Climate Services Call 3 grant, I built a digital measurement, reporting, and verification (dMRV) stack for UK woodlands from aerial, satellite, and drone imagery. The pipeline extracts four interpretable intermediate variables — tree count, individual crown delineation, species (conifer vs broadleaved), and canopy height — that inform above-ground biomass and carbon-sequestration estimates.

### Shared backbone

Every expert head fine-tunes from Meta's open-weight DINOv3 ViT-L/16 pretrained on the SAT-493M dataset - 493M RGB tiles drawn from 0.6m Maxar satellite imagery. A satellite-pretrained SSL backbone off-the-shelf gives strong dense features for woodland EO without burning project compute on a foundation we are not differentiated in; DINOv3-SAT also currently leads canopy-height benchmarks among public backbones, which makes it a natural fit here.

### Tree counting

The tree-counting head is supervised on a unified corpus of 76,561 images containing 1,053,504 annotated trees, assembled from seven heterogeneous public datasets - Yosemite, NeonTree (20 NEON sites across the USA), tropical palm plantations, the African-focused OAM Tree Cover Density set, eight California urban areas, Västergötland (Sweden), and generic temperate forest imagery. Annotations arrived as a mix of point coordinates, Pascal-VOC bounding boxes, and RLE-encoded COCO masks; bespoke conversion pipelines reduce all of these to consistent centre points without losing precision in the original formats. The architecture freezes the first 18 transformer blocks of the backbone and fine-tunes the final six with a lower learning rate, feeds the output through a CenterFPN that predicts a heatmap (CenterNet-style focal loss) plus a sub-pixel offset for precise localisation. The model generalises across dense closed canopy, sparse brushland, plantations, urban street trees, and winter-deciduous scenes.

### Crown segmentation

For individual crown delineation, instance-segmentation heads are trained on BAMFORESTS (1,439 / 382 train/val tiles, 58k + 15k mask instances). Two architectures sit on the same backbone: Mask2Former with learned queries operating in a point-sampled mask loss, and RF-DETR with a lightweight projector, deformable cross-attention, and a minimal mask branch that produces predictions via a dot product between query mask embeddings and a pixel embedding map. On BAMFORESTS, RF-DETR reaches AP@50 of 72.28 on BAMFORESTS, ahead of Mask2Former at 69.05 and Mask R-CNN at 65.22 as reported by Ruschhaupt et al. (2025). RF-DETR also outputs bounding boxes alongside masks.

### Species classification

A lightweight crown-level head answers a binary question — conifer or broadleaved? — on top of each predicted instance mask, trained on Quebec Trees with per-tree species labels. Splitting species off from segmentation avoids loading the already-complex instance head with a second objective. The mask is converted into a patch-overlap weight map via 16×16 average pooling onto the ViT patch grid, ROI patches are refined through a two-layer masked TransformerEncoder so that within-crown patches can exchange texture and structure information while background is ignored, the result is summarised by masked average pooling, and a small MLP produces the class logits. Overall accuracy is 96.8% with macro F1 of 96.1% — broadleaved F1 is 97.7% (precision 97.3%, recall 98.1%, n=1,879) and conifer F1 is 94.5% (precision 95.5%, recall 93.5%, n=787).

The four variables — count, crown geometry, species mix, and canopy height (from national LiDAR surveys) — provide interpretable intermediearies for biomass and carbon-sequestration estimates. Pre-training and fine-tuning together consumed roughly 16 GPU-days on NVIDIA A40 instances via Runpod's EU region. The system is the woodland-monitoring component of [New Gradient](https://newgradient.com)'s UK ecosystems platform (Calterra).
