// Personal content, destinations, and optional photo live here.
export const profile = {
  "name": "Ritvik Aggarwal",
  "introduction": "I'm Ritvik a junior at Indiana University studying Computer Science/Informatics. That's pretty much the short version, I'd rather you scroll down and look through what I've actually built.",
  "details": [
    {
      "label": "Hometown",
      "value": "Dallas, Texas"
    },
    {
      "label": "Currently",
      "value": "reading an autobiography, probably"
    },
    {
      "label": "Drink of choice",
      "value": "Matcha, obviously"
    },
    {
      "label": "Swims",
      "value": "competitively, twice at Nationals"
    },
    {
      "label": "Plays",
      "value": "badminton on the side"
    }
  ],
  "projectsTitle": "What I've been building.",
  "projects": [
    {
      "id": "01",
      "name": "Evolutionary Neural Architecture Search",
      "category": "Personal project",
      "description": "Honestly, this one came out of pure laziness. I didn't want to sit there manually trying different numbers of layers and channel sizes, so I made the computer do the guessing for me. It starts with a bunch of random little network designs, trains each one on FashionMNIST, lets the best ones \"breed,\" mixes and mutates their depth and channel sizes over a few generations, and slowly narrows in on something accurate that isn't bloated. Turns out a decent chunk of \"model design\" is really just trial and error dressed up nicely this just automates the trial and error part.",
      "stack": [
        "Neural Architecture Search",
        "Evolutionary Optimization",
        "Model Selection"
      ],
      "demo": "",
      "visual": "network"
    },
    {
      "id": "02",
      "name": "Behavior Sequence Lab",
      "category": "Personal project",
      "description": "This one started as a random question late one night: could you tell how someone's doing focused, tired, confused just from the way they move their mouse and type, without ever seeing their face? So I built something to test it. A bidirectional LSTM watches a rolling window of mouse and keyboard behavior and guesses the person's state in real time, with a smoothing layer so it doesn't flip flop every time you click a little weird. It's actually live behind a small FastAPI app with a big disclaimer, because this is a fun experiment, not a mental health tool.",
      "stack": [
        "Sequence Classification",
        "Bidirectional LSTM",
        "Temporal Smoothing"
      ],
      "demo": "https://behavior-sequence-lab.onrender.com",
      "visual": "sequence"
    },
    {
      "id": "03",
      "name": "Cooperative Multi Agent PPO",
      "category": "Personal project",
      "description": "I've always liked the idea of agents figuring things out on their own instead of me hardcoding rules for them. So here, I built a tiny grid world where a team has to split up and grab targets together, and trained them with a shared PPO policy instead of babysitting each agent separately. The tricky (and kind of fun) part was the reward too generous to the team and everyone gets lazy, too generous to individuals and they stop working together. By the end they were bumping into each other a lot less, which felt like a small win.",
      "stack": [
        "Multi Agent Reinforcement Learning",
        "Proximal Policy Optimization",
        "Reward Design"
      ],
      "demo": "",
      "visual": "agents"
    },
    {
      "id": "04",
      "name": "AI Trading Signal Model",
      "category": "Personal project",
      "description": "This one's basically me asking \"can I actually predict anything about the stock market\" and then spending way too long finding out. I combined an LSTM with a Transformer to catch both quick momentum and longer patterns in price data, and made sure to backtest it out of sample instead of trusting the training numbers, since that's usually where these projects quietly fall apart. Short answer: no, it doesn't reliably beat the market nothing simple does but building it and trying to break it taught me more about time series modeling than a semester of lectures would have.",
      "stack": [
        "Time Series Forecasting",
        "LSTM Transformer Modeling",
        "Out of Sample Evaluation"
      ],
      "demo": "https://ai-trading-simulator-7dle.onrender.com",
      "visual": "trading"
    }
  ],
  "campusTitle": "Coursework · Life at IU.",
  "campus": [
    {
      "name": "Indian Student Association",
      "category": "On campus",
      "description": "One of the clubs I'm part of at IU a good way to stay close to home while at school, between the cultural events and just having a group of people around who get it."
    },
    {
      "name": "IU Dance Marathon",
      "category": "On campus",
      "description": "A 24 hour, on campus dance marathon that raises money for Riley Children's Hospital. It's a long day on your feet, but genuinely one of my favorite things I do every year."
    },
    {
      "name": "Matcha Club",
      "category": "On campus",
      "description": "Exactly what it sounds like a group of us getting together over matcha. Low key, but one of my favorite ways to unwind and actually meet new people outside of classes."
    },
    {
      "name": "Reading autobiographies",
      "category": "Off campus",
      "description": "Outside of clubs and classes, I like reading autobiographies. Something about seeing how someone else's decisions actually played out over a whole life is more interesting to me than most fiction."
    }
  ],
  "skillsTitle": "Skills · Machine learning.",
  "skills": [
    {
      "name": "Deep learning",
      "items": [
        "Neural Architecture Search",
        "Sequence Classification",
        "LSTM & Bidirectional LSTM",
        "Transformer Models"
      ]
    },
    {
      "name": "Learning & optimization",
      "items": [
        "Multi Agent Reinforcement Learning",
        "Proximal Policy Optimization",
        "Genetic Algorithms",
        "Reward Design"
      ]
    },
    {
      "name": "Applied ML",
      "items": [
        "Time Series Forecasting",
        "Out of Sample Evaluation",
        "Computer Vision",
        "Training & Inference Pipelines"
      ]
    }
  ],
  "contactTitle": "Contact",
  "contact": "Let's build something together.",
  "email": "raggarw@iu.edu",
  "socials": [
    {
      "label": "GitHub",
      "url": "https://github.com/raggarw004"
    },
    {
      "label": "LinkedIn",
      "url": "https://www.linkedin.com/in/ritvikaggarwal/"
    }
  ],
  resumePath: "resume.pdf",
  "footer": "Let's build something together.",
  "experienceTitle": "Where the code meets the real world.",
  "experience": [
    {
      "id": "01",
      "name": "GitHub",
      "role": "Independent Contributor",
      "description": "I'm working on the less glamorous side of AI: figuring out why the code has suddenly decided not to cooperate. That means digging through Python training and inference scripts, following clues through data loading, tokenization, and batching, and rerunning evaluations to see what actually changed. I'm also writing tests for the awkward cases, like empty outputs, broken JSON, and APIs that take an unexpected coffee break. Along the way, I'm untangling dependencies and making setup easier to follow. It's part detective work, part patience test, and very satisfying when the bug finally makes sense.",
      "stack": [
        "Training & Inference",
        "Model Evaluation",
        "ML Pipeline Reliability"
      ],
      "visual": "network"
    },
    {
      "id": "02",
      "name": "Snapchat Lens Studio",
      "role": "Independent AR Lens Creator",
      "description": "I'm working on AR lenses in Snapchat Lens Studio, which is basically my excuse to make computer vision do something a little less serious. I'm experimenting with face tracking, world tracking, JavaScript, and 3D assets to build effects that react to whoever is on the other side of the camera. The fun part is dreaming up the effect. The humbling part is getting it to follow a moving face without doing its own thing. I'm testing across iOS and Android, tweaking the visuals, and keeping an eye on asset sizes and frame rates. Right now, it's a lot of build, test, laugh at the weird result, and try again.",
      "stack": [
        "Computer Vision",
        "Face & World Tracking",
        "AR Interaction"
      ],
      "visual": "vision"
    }
  ],
  "photoPath": "portrait.png",
  "photoAlt": "Ritvik Aggarwal"
};
