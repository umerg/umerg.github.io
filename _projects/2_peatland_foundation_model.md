---
layout: page
title: Peatland foundation model
description: Self-supervised geospatial backbone for UK peatland monitoring.
img: assets/img/projects/peatland_foundation_model.png
importance: 2
category: research
---

Peatlands are the largest terrestrial carbon store in the UK, and their erosion features are difficult to delineate from imagery alone — labels are scarce, sensors are heterogeneous, and the visual signal is subtle.

Under an Innovate UK grant, I trained a self-supervised geospatial backbone (BEiT / MAE variants) on ~20,000+ sq. km. of multiresolution UK peatland imagery, combining RGB orthophotos with digital surface models. A downstream UPerNet segmentation head targets erosion features on the ground. To handle domain shift across sensors and regions, I built an active-learning sample-selection loop that picks the most informative tiles from heterogeneous data sources for human labelling.

The deployed system delivers a ~10× mIoU improvement over the incumbent DEFRA-backed baseline and is in production use at [New Gradient](https://newgradient.com) for ecosystem monitoring.
