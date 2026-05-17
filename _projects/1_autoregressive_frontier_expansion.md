---
layout: page
title: Autoregressive Frontier Expansion
description: Generating branching biological morphologies with topology-aware diffusion.
img: assets/img/projects/autoregressive_frontier_expansion.png
importance: 1
category: research
related_publications: true
---

Branching biological structures — botanical trees, neurons, vasculature — sit between graphs and 3D point clouds. Their topology and geometry are entangled, scale varies by orders of magnitude across instances, and rotational symmetry is partial: many such structures are axis-aligned by gravity, growth, or development. Standard generative models for either graphs or point clouds capture none of this well.

We propose an autoregressive process that expands the structure node-by-node from a root. At each step, the model jointly predicts (i) whether every frontier node should expand and (ii) the 3D positions of any new child nodes. New positions are produced by a diffusion process over an SO(2)-equivariant EGNN that operates in parent-centric local frames — appropriate for axis-aligned biological structures. Generation is conditioned on multi-filtration zero-dimensional persistent homology so the global topology of the target can be specified or matched.

The current paper at the [GRaM Workshop @ ICLR 2026](https://gram-workshop.github.io) demonstrates the approach on botanical tree crowns; ongoing work extends it to neuronal morphologies in collaboration with the University of Leipzig and ETH Zurich. The longer-term aim is a generative model of branching structure that is faithful enough to act as a prior in inverse problems on real microscopy and field-scan data.
