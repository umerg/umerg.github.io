---
layout: page
title: Woodland mapping
description: Tree counting, canopy segmentation, and species classification at national scale.
img: assets/img/projects/woodland_mapping.png
importance: 4
category: research
---

Under a UK Space Agency (UKSA) grant, I am building a multi-task system for woodland inventory from aerial and satellite imagery: tree counting, canopy segmentation, and species classification, sharing a single self-supervised backbone.

The backbone is a DINOv3 model pretrained on ~76k tiles of unified woodland imagery; downstream heads include centerpoint regression for counting, Mask2Former or RF-DETR for canopy instance segmentation, and a Neural Field head for continuous species probability over canopy area. A substantial part of the work has been unifying heterogeneous public and private labels — different schemas, resolutions, and label noise profiles — into a single ~1M-tree annotation corpus.

The system is the woodland-monitoring component of [New Gradient](https://newgradient.com)'s UK ecosystems platform.
