export const mainStore = defineStore("main", () => {
  const turnsElapsed = ref(0);
  const gameover = ref(false);
  const gamewin = ref(false);

  //Цель - 1000000
  const construction = ref(0);
  const buildPrice = ref([0, 0, 0]);

  const mood = ref(100);
  const workers = ref(0);
  const wood = ref(0);
  const stone = ref(0);
  const gold = ref(0);

  const loggers = ref(0);
  const miners = ref(0);
  const traders = ref(0);

  const toolLVL = ref(1);
  const chopLVL = ref(1);
  const mineLVL = ref(1);
  const tradeLVL = ref(1);
  const houseLVL = ref(1);

  function tick() {
    if (turnsElapsed.value < 3999) {
      turnsElapsed.value++;
      workersDoWork();
      if (construction.value >= 1000000) {
        gamewin.value = true;
        pause();
        return;
      }
    } else {
      gameover.value = true;
      pause();
      return;
    }

    if (turnsElapsed.value % 4 == 0) {
      calcBuildPrice();
    }

    if (turnsElapsed.value % 12 == 0) {
      workers.value += houseLVL.value;
    }
  }

  const { pause, resume, isActive } = useIntervalFn(() => {
    tick();
  }, 6000);

  function $reset() {
    turnsElapsed.value = 0;

    construction.value = 0;
    buildPrice.value = [0, 0, 0];

    mood.value = 100;
    workers.value = 0;
    wood.value = 0;
    stone.value = 0;
    gold.value = 0;

    loggers.value = 0;
    miners.value = 0;
    traders.value = 0;

    toolLVL.value = 1;
    chopLVL.value = 1;
    mineLVL.value = 1;
    tradeLVL.value = 1;
    houseLVL.value = 1;

    gameover.value = false;
    resume();
    console.log("Store was reset");
  }

  // Геттеры

  const buildable = computed(
    () =>
      wood.value >= buildPrice.value[0] &&
      stone.value >= buildPrice.value[1] &&
      gold.value >= buildPrice.value[2]
  );

  const maxUpgradeLvl = computed(() =>
    Math.max(
      ...[
        toolLVL.value,
        chopLVL.value,
        mineLVL.value,
        tradeLVL.value,
        houseLVL.value,
      ]
    )
  );

  //Игровые активные функции

  function build() {
    if (buildable.value && mood.value > 0) {
      construction.value += toolLVL.value;
      mood.value--;
      wood.value -= buildPrice.value[0];
      stone.value -= buildPrice.value[1];
      gold.value -= buildPrice.value[2];
      calcBuildPrice();
    }
  }

  function calcBuildPrice() {
    var total = ~~(construction.value / 100);
    buildPrice.value = [0, 0, 0];
    while (total > 0) {
      const i = ~~(Math.random() * 2.99);
      buildPrice.value[i]++;
      total--;
    }
  }

  function chop() {
    if (mood.value > 0) {
      wood.value += chopLVL.value;
      mood.value--;
    }
  }

  function mine() {
    if (mood.value > 0) {
      stone.value += mineLVL.value;
      mood.value--;
    }
  }

  function trade() {
    if (mood.value > 0) {
      const r = ~~(Math.random() * 7);
      switch (r) {
        case 0:
          gold.value -= 6;
          mood.value -= 6;
          break;

        case 1:
          if (wood.value > 0) {
            wood.value--;
            gold.value--;
          }
          break;

        case 2:
          if (stone.value > 0) {
            stone.value--;
            gold.value--;
          }
          break;

        case 4:
          if (wood.value > 0) {
            wood.value--;
            gold.value += tradeLVL.value * 2;
          }
          break;

        case 5:
          if (stone.value > 0) {
            stone.value--;
            gold.value += tradeLVL.value * 2;
          }
          break;

        case 6:
          gold.value += 6;
          mood.value += 6;
          break;

        default:
          gold.value += tradeLVL.value;
          break;
      }
      if (mood.value >= 100) mood.value = 100;
    }
  }

  function rest() {
    mood.value += ~~(Math.random() * houseLVL.value + 2);
    if (mood.value > 100) mood.value = 100;
  }

  // Улучшения

  function upgradeTool() {
    if (gold.value >= maxUpgradeLvl.value) {
      gold.value -= maxUpgradeLvl.value;
      toolLVL.value++;
    }
  }

  function upgradeChop() {
    if (gold.value >= maxUpgradeLvl.value) {
      gold.value -= maxUpgradeLvl.value;
      chopLVL.value++;
    }
  }

  function upgradeMine() {
    if (gold.value >= maxUpgradeLvl.value) {
      gold.value -= maxUpgradeLvl.value;
      mineLVL.value++;
    }
  }

  function upgradeTrade() {
    if (gold.value >= maxUpgradeLvl.value) {
      gold.value -= maxUpgradeLvl.value;
      tradeLVL.value++;
    }
  }

  function upgradeHouse() {
    if (gold.value >= maxUpgradeLvl.value) {
      gold.value -= maxUpgradeLvl.value;
      houseLVL.value++;
    }
  }

  function trainLogger() {
    if (workers.value > 0 && gold.value >= 25) {
      loggers.value++;
      workers.value--;
      gold.value -= 25;
    }
  }

  function trainMiner() {
    if (workers.value > 0 && gold.value >= 25) {
      miners.value++;
      workers.value--;
      gold.value -= 25;
    }
  }

  function trainTrader() {
    if (workers.value > 0 && gold.value >= 25) {
      traders.value++;
      workers.value--;
      gold.value -= 25;
    }
  }

  //Игровые пассивные функции

  function workersDoWork() {
    construction.value += workers.value;
    wood.value += loggers.value;
    stone.value += miners.value;
    gold.value += traders.value;
  }

  // Данные
  const resources = [
    {
      id: 0,
      name: "Mood",
      icon: "😀",
      value: mood,
    },
    {
      id: 1,
      name: "Workers",
      icon: "👤",
      value: workers,
    },
    {
      id: 2,
      name: "Wood",
      icon: "🪵",
      value: wood,
    },
    {
      id: 3,
      name: "Stone",
      icon: "🪨",
      value: stone,
    },
    {
      id: 4,
      name: "Gold",
      icon: "🪙",
      value: gold,
    },
  ];

  return {
    turnsElapsed,
    resources,
    gamewin,
    gameover,
    construction,
    buildPrice,
    mood,
    workers,
    wood,
    stone,
    gold,
    loggers,
    miners,
    traders,
    toolLVL,
    chopLVL,
    mineLVL,
    tradeLVL,
    houseLVL,

    buildable,
    maxUpgradeLvl,

    tick,
    build,
    chop,
    mine,
    trade,
    rest,
    upgradeTool,
    upgradeChop,
    upgradeMine,
    upgradeTrade,
    upgradeHouse,
    trainLogger,
    trainMiner,
    trainTrader,
    $reset,
  };
});
