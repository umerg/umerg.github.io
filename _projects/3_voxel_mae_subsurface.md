---
layout: page
title: Voxel-MAE for subsurface geology
description: Masked voxel pretraining over sparse multimodal borehole logs.
img: assets/img/projects/voxel_mae_subsurface.png
importance: 3
category: research
---

Mineral exploration data — geochemical assays, downhole geophysics — is extremely sparse and irregularly distributed in 3D space. Most of any volume is unobserved, and the observations that exist are multimodal, of unequal cost, and rarely co-located.

I voxelised this data into a sparse 3D grid and trained a Single-Stride Sparse Transformer (SST) optimised for non-empty voxels. A masked-voxel regression objective — the 3D analogue of MAE — pretrains the model to inpaint missing measurements from surrounding context across modalities. The same pretraining objective doubles as the downstream task: given a borehole network, predict copper and gold grade distributions in masked subsurface volumes for precision-mining exploration.

The work was recognised with a $4,000 innovation award for precision mining exploration and feeds into commercial subsurface modelling work at [New Gradient](https://newgradient.com).
