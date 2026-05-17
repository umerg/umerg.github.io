// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected research projects in geometric deep learning and applied biomedical / geospatial ML.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-awarded-4-000-for-an-innovation-in-precision-mining-exploration-voxel-mae-pretraining-for-3d-subsurface-modelling-from-sparse-multimodal-borehole-logs",
          title: 'Awarded $4,000 for an innovation in precision mining exploration — Voxel-MAE pretraining for...',
          description: "",
          section: "News",},{id: "news-contributed-to-origin-peptides-selection-for-innovate-uk-s-6-4m-smmip-programme-applying-machine-learning-to-inform-experimental-conditions-for-protein-synthesis",
          title: 'Contributed to Origin Peptides’ selection for Innovate UK’s £6.4M SMMIP programme — applying...',
          description: "",
          section: "News",},{id: "news-started-a-research-collaboration-with-the-university-of-leipzig-and-eth-zurich-on-generative-models-for-branching-biological-morphologies",
          title: 'Started a research collaboration with the University of Leipzig and ETH Zurich on...',
          description: "",
          section: "News",},{id: "news-autoregressive-frontier-expansion-growing-trees-with-graph-machine-learning-accepted-to-the-gram-workshop-at-iclr-2026",
          title: 'Autoregressive Frontier Expansion: Growing Trees with Graph Machine Learning accepted to the GRaM...',
          description: "",
          section: "News",},{id: "news-presenting-autoregressive-frontier-expansion-as-a-poster-at-the-gram-workshop-iclr-2026-in-rio-de-janeiro",
          title: 'Presenting Autoregressive Frontier Expansion as a poster at the GRaM Workshop, ICLR 2026,...',
          description: "",
          section: "News",},{id: "projects-autoregressive-frontier-expansion",
          title: 'Autoregressive Frontier Expansion',
          description: "Generating branching biological morphologies with topology-aware diffusion.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_autoregressive_frontier_expansion/";
            },},{id: "projects-peatland-foundation-model",
          title: 'Peatland foundation model',
          description: "Self-supervised geospatial backbone for UK peatland monitoring.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_peatland_foundation_model/";
            },},{id: "projects-voxel-mae-for-subsurface-geology",
          title: 'Voxel-MAE for subsurface geology',
          description: "Masked voxel pretraining over sparse multimodal borehole logs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_voxel_mae_subsurface/";
            },},{id: "projects-woodland-mapping",
          title: 'Woodland mapping',
          description: "Tree counting, canopy segmentation, and species classification at national scale.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_woodland_mapping/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/umer_gupta_cv.pdf", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/umerg", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/umer-gupta-3bb245188", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },];
