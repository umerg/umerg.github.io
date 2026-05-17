---
layout: page
title: Autoregressive Frontier Expansion
description: Generating branching biological morphologies with topology-aware diffusion.
importance: 1
category: research
related_publications: true
---

Branching biological structures — botanical trees, neurons, vasculature — sit between graphs and 3D point clouds. Their topology and geometry are entangled, scale varies by orders of magnitude across instances, and rotational symmetry is partial: many such structures are axis-aligned by gravity, growth, or development. Standard generative models for either graphs or point clouds capture none of this well, and existing learning-based methods for neuronal trees either decode soma-to-tip walks independently of one another or fix the branching topology to a seed tree and only learn its geometry.

We propose an autoregressive process that grows the structure from a root, alternating two operations on an active frontier of leaves. _Expansion_ decides, for each frontier node, whether it should bifurcate or terminate; _localisation_ places any new children at a learned 3D offset relative to their parent. In practice, both predictions are produced jointly by a denoising diffusion process over the frontier state, with an SO(2)-equivariant EGNN backbone — equivariant to rotations around the principal axis but not the others, which matches the partial symmetry of trees and of cortical neurons.

Generation starts from a single root node at the origin, which on its own carries no information about the morphology being grown. To guide the early steps, when partial trees still look very similar to one another, each diffusion step is additionally conditioned on a compact topological descriptor of the target — multi-filtration 0-dimensional persistent homology — so the global branching profile of the structure can be matched or specified at sample time.

The current paper at the [GRaM Workshop @ ICLR 2026](https://gram-workshop.github.io) demonstrates the approach on three botanical tree crowns of 149, 235, and 327 nodes, reconstructing them with normalised tree edit distance below 0.03 and closely matching the ground-truth distributions of branch length and bifurcation angle. Ongoing work extends the framework to neuronal morphologies in collaboration with the University of Leipzig and ETH Zurich. The longer-term aim is a generative model of branching structure that is faithful enough to act as a prior in inverse problems on real microscopy and field-scan data.
