// ============================================================
// EDIT ME! This is the only file you need to touch to change
// the workouts, exercises, sets/reps, tips, or alternatives.
// Every page on the site is generated automatically from this.
// ============================================================

module.exports = {
  cycle: ["A", "B", "C", "Rest"],
  frequency: "3 sessions per week (e.g. Mon / Wed / Fri), rotating A → B → C → A. Rest at least one day between sessions.",

  days: [
    {
      key: "a",
      letter: "A",
      title: "Strength Foundation",
      focus: "Compound lifts & core.",
      exercises: [
        {
          name: "Goblet Squat",
          target: "Legs / Glutes",
          sets: "3 × 8–10",
          detail:
            "Hold a dumbbell or kettlebell at chest height. Chest up, knees track over toes, sit hips back and down until thighs are at least parallel to the floor.",
          tempo: "2s down, 1s pause, drive up. Exhale on the way up.",
          alternative: "Back squat",
        },
        {
          name: "Push-ups",
          target: "Chest / Triceps",
          sets: "3 × 8–12",
          detail:
            "Hands slightly wider than shoulders. Straight line head to heels, elbows ~45° from body, lower chest close to the floor.",
          tempo: "2s down, explode up. Regress on knees or an elevated surface if needed.",
          alternative: "Flat or incline dumbbell/barbell bench press",
        },
        {
          name: "Bent-over Row",
          target: "Back / Biceps",
          sets: "3 × 8–12",
          detail:
            "Flat back, hinge at hips ~45°, let arms hang, pull elbows toward waist and squeeze shoulder blades together at the top.",
          tempo: "1s pull up, 2–3s controlled lower. Don't jerk the weight.",
          alternative: "Seated cable row or chest-supported row",
        },
        {
          name: "Glute Bridge",
          target: "Glutes / Hamstrings",
          sets: "3 × 10–12",
          detail:
            "Feet flat, knee-width apart, close to glutes. Drive through heels, squeeze glutes hard at the top, avoid over-arching the low back.",
          tempo: "1s up, 1s pause and squeeze, 2s lower.",
          alternative: "Barbell or dumbbell hip thrust (shoulders on a bench)",
        },
        {
          name: "Plank",
          target: "Core",
          sets: "3 × 30–45s",
          detail:
            "Forearms under shoulders, ribs pulled down, glutes tight, body forms one straight line from head to heels. Breathe steadily throughout.",
          tempo: "Hold still — no sagging or piked hips.",
          alternative: "Hollow body hold, or plank with shoulder taps for added difficulty",
        },
      ],
      cooldown:
        "5 minutes of light mobility work — hip circles, cat-cow, chest opener, hamstring stretch.",
    },

    {
      key: "b",
      letter: "B",
      title: "Power & Hinge",
      focus: "Posterior chain and pulling strength, plus single-leg stability.",
      exercises: [
        {
          name: "Romanian Deadlift",
          target: "Hamstrings / Glutes",
          sets: "3 × 6–10",
          detail:
            "Hold weight in front of thighs. Soft knees, hinge hips back while keeping the weight close to your legs, feel a stretch in the hamstrings, then drive hips forward to stand.",
          tempo: "2–3s controlled lower, 1s pause, drive up.",
          alternative: "Conventional deadlift (from the floor) if you have coaching/experience",
        },
        {
          name: "Overhead Press",
          target: "Shoulders / Triceps",
          sets: "3 × 8–10",
          detail:
            "Feet shoulder-width, brace core, press straight up without flaring the ribs or arching the low back.",
          tempo: "1s press up, 2s controlled lower. Exhale on the press.",
          alternative: "Seated dumbbell shoulder press",
        },
        {
          name: "Pull-ups (assisted if needed)",
          target: "Back / Biceps",
          sets: "3 × 6–10",
          detail:
            "Full hang to chin over the bar. Pull shoulder blades down and back first, then bend the elbows. Control the descent all the way back to a full hang.",
          tempo: "1–2s pull up, 2–3s controlled lower.",
          alternative: "Lat pulldown machine, or banded pull-ups for assistance",
        },
        {
          name: "Walking Lunges",
          target: "Legs / Glutes",
          sets: "3 × 10/leg",
          detail:
            "Step forward into a long stride, front knee stacked over the ankle, back knee drops straight down toward the floor.",
          tempo: "Controlled 2s descent each step, steady pace forward.",
          alternative: "Reverse lunges (easier to balance) or step-ups onto a bench",
        },
        {
          name: "Side Plank",
          target: "Obliques / Core",
          sets: "2 × 20–30s/side",
          detail:
            "Elbow under shoulder, stack shoulders and hips, keep body in one straight line without letting the hips sag toward the floor.",
          tempo: "Hold still, breathe steadily. Lower knee-supported version if needed.",
          alternative: "Copenhagen plank (advanced) or side plank with top-knee raised",
        },
      ],
      cooldown:
        "5 minutes of mobility — doorway pec stretch, kneeling hip flexor stretch, child's pose.",
    },

    {
      key: "c",
      letter: "C",
      title: "Conditioning & Core",
      focus: "Full-body movement patterns, grip, and light cardio for heart health.",
      exercises: [
        {
          name: "Kettlebell Swings",
          target: "Glutes / Hamstrings",
          sets: "3 × 12–15",
          detail:
            "Hike the weight back between your legs, then hinge and snap the hips forward — power comes from the glutes, not the arms.",
          tempo: "Explosive hip snap, controlled backswing. Exhale sharply at the top.",
          alternative: "Step-ups onto a bench or box (12–15 reps/leg)",
        },
        {
          name: "Dumbbell Chest Press",
          target: "Chest / Triceps",
          sets: "3 × 10–12",
          detail:
            "Lying on a bench or floor, lower dumbbells with control to chest level, elbows at ~45°, then press up without locking the elbows out hard.",
          tempo: "2s lower, 1s press up. Exhale on the press.",
          alternative: "Machine chest press, or floor press if no bench available",
        },
        {
          name: "Single-arm Row",
          target: "Back / Biceps",
          sets: "3 × 10–12/side",
          detail:
            "Support your opposite hand and knee on a bench, flat back, pull elbow up and back close to your body, squeeze the shoulder blade at the top.",
          tempo: "1s pull up, 2s controlled lower.",
          alternative: "Chest-supported row, or resistance band row",
        },
        {
          name: "Farmer's Carry",
          target: "Grip / Core",
          sets: "3 × 30–40s",
          detail:
            "Hold a heavy dumbbell or kettlebell in each hand, stand tall, shoulders back and down, walk with short controlled steps.",
          tempo: "Steady walking pace, brace core throughout.",
          alternative: "Suitcase carry (single-arm) to add an anti-lean core challenge",
        },
        {
          name: "Dead Bug",
          target: "Deep Core",
          sets: "3 × 12–15",
          detail:
            "Lying on your back, arms up and knees bent at 90°. Press low back into the floor, extend opposite arm and leg slowly without letting the back arch.",
          tempo: "3–4s extend out, 2s return to start.",
          alternative: "Bird dog (on hands and knees) if lying down is uncomfortable",
        },
      ],
      cooldown:
        "Finish with 10–15 minutes of easy cardio (walk, bike, or row) at a conversational pace.",
    },
  ],

  guidelines: [
    {
      title: "Frequency",
      text: "3 sessions per week (e.g. Mon / Wed / Fri), rotating A → B → C → A. Rest at least one day between sessions to let muscles recover.",
    },
    {
      title: "Progression",
      text: "Start light and focus on form. Add weight only once you can complete the top of the rep range with good technique on every set.",
    },
    {
      title: "Recovery",
      text: "Sleep 7–9 hours, stay hydrated, and don't skip rest days — recovery is when your body actually adapts and gets stronger.",
    },
    {
      title: "Warm Up / Cool Down",
      text: "5 minutes of light cardio and dynamic stretching before, 5–15 minutes of mobility or easy cardio after every session.",
    },
    {
      title: "Don't Forget Aerobic Activity",
      text: "This plan covers strength. Separately, aim for 150 minutes/week of moderate cardio (brisk walking, cycling, swimming) or 75 minutes/week of vigorous cardio — the Day C finisher alone won't cover it. A daily walk is the easiest way to close the gap.",
    },
  ],
};
