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
        },{id: "news-awarded-4-000-for-an-innovation-in-precision-mining-exploration",
          title: 'Awarded $4,000 for an innovation in precision mining exploration.',
          description: "",
          section: "News",},{id: "news-received-an-innovate-uk-nature-positive-ai-grant-for-geospatial-monitoring-of-peatlands-at-new-gradient",
          title: 'Received an Innovate UK Nature-Positive AI grant for geospatial monitoring of peatlands at...',
          description: "",
          section: "News",},{id: "news-started-a-research-collaboration-with-eth-zurich-on-generative-models-for-branching-biological-morphologies",
          title: 'Started a research collaboration with ETH Zurich on generative models for branching biological...',
          description: "",
          section: "News",},{id: "news-origin-peptides-and-new-gradient-s-selected-for-innovate-uk-s-6-4m-smmip-programme-applying-machine-learning-to-inform-real-time-experimental-optimisation-for-protein-synthesis",
          title: 'Origin Peptides’ and New Gradient’s selected for Innovate UK’s £6.4M SMMIP programme -...',
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
          description: "Single-stride sparse transformer with a voxel-MAE objective used directly for dense regression on near-field mineral exploration data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_voxel_mae_subsurface/";
            },},{id: "projects-woodland-monitoring",
          title: 'Woodland Monitoring',
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
