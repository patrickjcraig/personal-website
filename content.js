/*
 * Site content source
 *
 * Add a post here, then copy blog/_template/index.html to blog/<your-slug>/index.html.
 * Add a YouTube video ID to a video entry to turn its placeholder into an embed.
 */
window.siteContent = {
  posts: [
    {
      slug: "multimodal-inspection",
      title: "Why multimodal inspection sees more than one instrument can",
      date: "2026-08-12",
      category: "Research explainer",
      excerpt: "A practical look at why X-ray, acoustic, terahertz, and optical data are strongest when they are treated as complementary evidence rather than competing images.",
      body: `
        <p>Complex semiconductor packages rarely offer a single, complete view of their condition. An X-ray volume can reveal a buried interconnect, an acoustic scan can expose a delamination, and an optical image can make surface geometry immediately legible. Each view is useful; none is the whole story.</p>
        <h2>Different signals answer different questions</h2>
        <p>The useful question is not which modality wins. It is what each signal can contribute to a shared decision. X-ray methods are excellent at seeing through a stack, acoustic microscopy is sensitive to interfaces and voids, terahertz measurements carry material and electrical signatures, and optical imaging anchors observations to accessible surface features.</p>
        <p>Bringing those measurements together requires more than placing images side by side. A reliable workflow records the coordinate system, the confidence of each observation, and the assumptions used to align the data. That makes it possible to trace a conclusion back to the measurement that supports it.</p>
        <h2>Fusion should reduce uncertainty</h2>
        <p>Multimodal fusion is most valuable when it narrows the next question. If an acoustic feature and an X-ray anomaly point to the same interface, the next experiment can be more targeted. If they disagree, that disagreement is useful too: it identifies where registration, contrast, or the physical hypothesis needs another look.</p>
        <p>That is the mindset I bring to inspection work: use every modality for the evidence it provides, preserve the path from raw measurement to interpretation, and let uncertainty guide the next measurement.</p>
      `
    },
    {
      slug: "research-progress-in-public",
      title: "Making research progress visible before the final result",
      date: "2026-08-05",
      category: "Academic journey",
      excerpt: "Small, well-documented decisions—an alignment check, a failed scan, a revised experiment—are often the real building blocks of a durable research program.",
      body: `
        <p>Research can look linear only after it is complete. In practice, progress is usually a sequence of small decisions: a calibration that changes the interpretation of a scan, a conversation that clarifies an experimental variable, or a negative result that eliminates an attractive but unsupported explanation.</p>
        <h2>Keep the decision trail</h2>
        <p>A useful research record captures why an experiment was run, not only what it produced. Recording the question, setup, assumptions, and next action makes it easier to return to a dataset months later—and makes collaboration much less dependent on memory.</p>
        <p>This is especially important in multimodal work, where one measurement may set the context for another. A brief note about sample orientation or a reconstruction setting can be the detail that explains a later mismatch.</p>
        <h2>Share work at the right resolution</h2>
        <p>Not every update needs to be a polished conclusion. A clear figure, a concise lab note, or a short explanation of a method can make the work more legible to collaborators and future students. Sharing that intermediate reasoning is one way to build a research practice that others can inspect, extend, and trust.</p>
      `
    },
    {
      slug: "multimodal-experiment-checklist",
      title: "A repeatable checklist for multimodal imaging experiments",
      date: "2026-07-28",
      category: "Technical tutorial",
      excerpt: "A lightweight pre-scan checklist for connecting instrument settings, sample handling, registration, and interpretation into one reproducible workflow.",
      body: `
        <p>When a sample will move through multiple imaging systems, the experiment begins before the first scan. A few consistent checks help make later registration and interpretation far easier.</p>
        <h2>Before acquisition</h2>
        <p>Start with a clear sample identifier, orientation reference, and question for each modality. Photograph the sample and mark a coordinate convention that can survive handoffs between instruments. Record the region of interest, expected resolution, and any constraint that could affect exposure, coupling, or reconstruction.</p>
        <h2>During acquisition</h2>
        <p>Capture enough metadata to recreate the measurement: instrument settings, fixture details, calibration state, and any deviation from the intended protocol. Add a quick quality-control checkpoint before moving on; a small correction at this stage is much cheaper than a re-run after data processing has started.</p>
        <h2>After acquisition</h2>
        <p>Store raw data separately from derived views, preserve the transforms used for registration, and write down the confidence limits of the interpretation. The result is not only a cleaner dataset. It is a workflow that can be handed to a collaborator, repeated on the next sample, and improved over time.</p>
      `
    }
  ],
  videos: [
    {
      title: "Multimodal inspection: a systems-level overview",
      date: "2026-08-12",
      topic: "Research explainer",
      description: "Placeholder for an introduction to the complementary roles of X-ray, acoustic, terahertz, and optical inspection.",
      youtubeId: "",
      thumbnail: ""
    },
    {
      title: "A research update from the lab",
      date: "2026-08-05",
      topic: "Academic journey",
      description: "Placeholder for a short update on the questions, decisions, and experiments shaping the current research cycle.",
      youtubeId: "",
      thumbnail: ""
    },
    {
      title: "Preparing a reproducible multimodal experiment",
      date: "2026-07-28",
      topic: "Technical tutorial",
      description: "Placeholder for a walkthrough of sample orientation, acquisition notes, and registration-ready data capture.",
      youtubeId: "",
      thumbnail: ""
    }
  ]
};
