


chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "OFF",
    });

  });

  function getClipboard() {

    const huntsMap = [
        {
            "id": "hunt_606 ",
            "name": "Caribou"
        },
        {
            "id": "hunt_526 ",
            "name": "Genomos"
        },
        {
            "id": "hunt_608 ",
            "name": "Labyrinth Screamer"
        },
        {
            "id": "hunt_607 ",
            "name": "Limascabra"
        },
        {
            "id": "hunt_527 ",
            "name": "Luncheon Toad"
        },
        {
            "id": "hunt_609 ",
            "name": "Mythrilcap"
        },
        {
            "id": "hunt_529 ",
            "name": "Northern Snapweed"
        },
        {
            "id": "hunt_530 ",
            "name": "Pephredo"
        },
        {
            "id": "hunt_605 ",
            "name": "Troll"
        },
        {
            "id": "hunt_528 ",
            "name": "Yakow"
        },
        {
            "id": "hunt_b_59 ",
            "name": "Green Archon"
        },
        {
            "id": "hunt_b_58 ",
            "name": "Ü-u-ü-u"
        },
        {
            "id": "hunt_615 ",
            "name": "Akyaali Crab"
        },
        {
            "id": "hunt_572 ",
            "name": "Asvattha"
        },
        {
            "id": "hunt_574 ",
            "name": "Bhujamga"
        },
        {
            "id": "hunt_534 ",
            "name": "Chamrosh"
        },
        {
            "id": "hunt_613 ",
            "name": "Gaja"
        },
        {
            "id": "hunt_573 ",
            "name": "Guhasaya"
        },
        {
            "id": "hunt_612 ",
            "name": "Hamsa"
        },
        {
            "id": "hunt_611 ",
            "name": "Kacchapa"
        },
        {
            "id": "hunt_614 ",
            "name": "Manjusaka"
        },
        {
            "id": "hunt_576 ",
            "name": "Odqan"
        },
        {
            "id": "hunt_610 ",
            "name": "Pisaca"
        },
        {
            "id": "hunt_532 ",
            "name": "Sotormurg"
        },
        {
            "id": "hunt_535 ",
            "name": "Starmite"
        },
        {
            "id": "hunt_533 ",
            "name": "Thavnairian Jhammel"
        },
        {
            "id": "hunt_575 ",
            "name": "Ufiti"
        },
        {
            "id": "hunt_531 ",
            "name": "Vajralangula"
        },
        {
            "id": "hunt_536 ",
            "name": "Valras"
        },
        {
            "id": "hunt_b_60 ",
            "name": "Iravati"
        },
        {
            "id": "hunt_b_56 ",
            "name": "Vajrakumara"
        },
        {
            "id": "hunt_537 ",
            "name": "Almasty"
        },
        {
            "id": "hunt_553 ",
            "name": "Automated Avenger"
        },
        {
            "id": "hunt_549 ",
            "name": "Automated Bit"
        },
        {
            "id": "hunt_548 ",
            "name": "Automated Cavalry"
        },
        {
            "id": "hunt_552 ",
            "name": "Automated Colossus"
        },
        {
            "id": "hunt_547 ",
            "name": "Automated Death Machine"
        },
        {
            "id": "hunt_550 ",
            "name": "Automated Roader"
        },
        {
            "id": "hunt_546 ",
            "name": "Automated Satellite"
        },
        {
            "id": "hunt_551 ",
            "name": "Automated Slasher"
        },
        {
            "id": "hunt_544 ",
            "name": "Canis Lupinus"
        },
        {
            "id": "hunt_542 ",
            "name": "Ceruleum Zoblyn"
        },
        {
            "id": "hunt_538 ",
            "name": "Eblan Bear"
        },
        {
            "id": "hunt_539 ",
            "name": "Eblan Icetrap"
        },
        {
            "id": "hunt_543 ",
            "name": "Ilsabardian Tursus"
        },
        {
            "id": "hunt_541 ",
            "name": "Jotunn"
        },
        {
            "id": "hunt_545 ",
            "name": "Overgrown Rose"
        },
        {
            "id": "hunt_540 ",
            "name": "Ovibos"
        },
        {
            "id": "hunt_b_55 ",
            "name": "Emperor &#39;s Rose"
        },
        {
            "id": "hunt_b_57 ",
            "name": "Warmonger"
        },
        {
            "id": "hunt_560 ",
            "name": "Armalcolite"
        },
        {
            "id": "hunt_568 ",
            "name": "Caretaker"
        },
        {
            "id": "hunt_564 ",
            "name": "Daphnia"
        },
        {
            "id": "hunt_561 ",
            "name": "Downfall Alarum"
        },
        {
            "id": "hunt_562 ",
            "name": "Downfall Droid"
        },
        {
            "id": "hunt_563 ",
            "name": "Downfall Hunter"
        },
        {
            "id": "hunt_567 ",
            "name": "Dynamite"
        },
        {
            "id": "hunt_569 ",
            "name": "Mousse"
        },
        {
            "id": "hunt_565 ",
            "name": "Osculator"
        },
        {
            "id": "hunt_559 ",
            "name": "Panopt"
        },
        {
            "id": "hunt_557 ",
            "name": "Regolith"
        },
        {
            "id": "hunt_571 ",
            "name": "Scraper"
        },
        {
            "id": "hunt_570 ",
            "name": "Supporter"
        },
        {
            "id": "hunt_554 ",
            "name": "Sweeper"
        },
        {
            "id": "hunt_566 ",
            "name": "Thinker"
        },
        {
            "id": "hunt_558 ",
            "name": "Trimmer"
        },
        {
            "id": "hunt_555 ",
            "name": "Wanderer"
        },
        {
            "id": "hunt_556 ",
            "name": "Weeper"
        },
        {
            "id": "hunt_b_54 ",
            "name": "Daphinia Magna"
        },
        {
            "id": "hunt_b_62 ",
            "name": "Genesis Rock"
        },
        {
            "id": "hunt_583 ",
            "name": "Akantha"
        },
        {
            "id": "hunt_582 ",
            "name": "Bird of Elpis"
        },
        {
            "id": "hunt_593 ",
            "name": "Elpis Minotaur"
        },
        {
            "id": "hunt_580 ",
            "name": "Gryps"
        },
        {
            "id": "hunt_588 ",
            "name": "Harpuia"
        },
        {
            "id": "hunt_587 ",
            "name": "Hippe"
        },
        {
            "id": "hunt_591 ",
            "name": "Lotis"
        },
        {
            "id": "hunt_590 ",
            "name": "Lykopersikon"
        },
        {
            "id": "hunt_592 ",
            "name": "Melanion"
        },
        {
            "id": "hunt_581 ",
            "name": "Monoceros"
        },
        {
            "id": "hunt_589 ",
            "name": "Morbol Marquis"
        },
        {
            "id": "hunt_579 ",
            "name": "Okyupete"
        },
        {
            "id": "hunt_577 ",
            "name": "Ophion"
        },
        {
            "id": "hunt_585 ",
            "name": "Ophiotauros"
        },
        {
            "id": "hunt_586 ",
            "name": "Pegasos"
        },
        {
            "id": "hunt_584 ",
            "name": "Phanopsyche"
        },
        {
            "id": "hunt_594 ",
            "name": "Remora"
        },
        {
            "id": "hunt_578 ",
            "name": "Yggdreant"
        },
        {
            "id": "hunt_b_64 ",
            "name": "Shockmaw"
        },
        {
            "id": "hunt_b_61 ",
            "name": "Yumcax"
        },
        {
            "id": "hunt_597 ",
            "name": "Beta"
        },
        {
            "id": "hunt_595 ",
            "name": "Broken Omicron"
        },
        {
            "id": "hunt_598 ",
            "name": "Delta"
        },
        {
            "id": "hunt_596 ",
            "name": "Drifting Ea"
        },
        {
            "id": "hunt_599 ",
            "name": "Lambda"
        },
        {
            "id": "hunt_600 ",
            "name": "Level Tricker"
        },
        {
            "id": "hunt_603 ",
            "name": "Other One"
        },
        {
            "id": "hunt_601 ",
            "name": "Stellar Amphiptere"
        },
        {
            "id": "hunt_602 ",
            "name": "Stellar Brobinyak"
        },
        {
            "id": "hunt_b_65 ",
            "name": "Level Cheater"
        },
        {
            "id": "hunt_b_63 ",
            "name": "Oskh Rhei"
        },
        {
            "id": "hunt_t_583",
            "name": "Akantha"
        },
        {
            "id": "hunt_t_615 ",
            "name": "Akyaali Crab"
        },
        {
            "id": "hunt_t_537 ",
            "name": "Almasty"
        },
        {
            "id": "hunt_t_560 ",
            "name": "Armalcolite"
        },
        {
            "id": "hunt_t_572 ",
            "name": "Asvattha"
        },
        {
            "id": "hunt_t_553 ",
            "name": "Automated Avenger"
        },
        {
            "id": "hunt_t_549 ",
            "name": "Automated Bit"
        },
        {
            "id": "hunt_t_548 ",
            "name": "Automated Cavalry"
        },
        {
            "id": "hunt_t_552 ",
            "name": "Automated Colossus"
        },
        {
            "id": "hunt_t_547 ",
            "name": "Automated Death Machine"
        },
        {
            "id": "hunt_t_550 ",
            "name": "Automated Roader"
        },
        {
            "id": "hunt_t_546 ",
            "name": "Automated Satellite"
        },
        {
            "id": "hunt_t_551 ",
            "name": "Automated Slasher"
        },
        {
            "id": "hunt_t_597 ",
            "name": "Beta"
        },
        {
            "id": "hunt_t_574 ",
            "name": "Bhujamga"
        },
        {
            "id": "hunt_t_582 ",
            "name": "Bird of Elpis"
        },
        {
            "id": "hunt_t_595 ",
            "name": "Broken Omicron"
        },
        {
            "id": "hunt_t_544 ",
            "name": "Canis Lupinus"
        },
        {
            "id": "hunt_t_568 ",
            "name": "Caretaker"
        },
        {
            "id": "hunt_t_606 ",
            "name": "Caribou"
        },
        {
            "id": "hunt_t_542 ",
            "name": "Ceruleum Zoblyn"
        },
        {
            "id": "hunt_t_534 ",
            "name": "Chamrosh"
        },
        {
            "id": "hunt_t_564 ",
            "name": "Daphnia"
        },
        {
            "id": "hunt_t_598 ",
            "name": "Delta"
        },
        {
            "id": "hunt_t_561 ",
            "name": "Downfall Alarum"
        },
        {
            "id": "hunt_t_562 ",
            "name": "Downfall Droid"
        },
        {
            "id": "hunt_t_563 ",
            "name": "Downfall Hunter"
        },
        {
            "id": "hunt_t_596 ",
            "name": "Drifting Ea"
        },
        {
            "id": "hunt_t_567 ",
            "name": "Dynamite"
        },
        {
            "id": "hunt_t_538 ",
            "name": "Eblan Bear"
        },
        {
            "id": "hunt_t_539 ",
            "name": "Eblan Icetrap"
        },
        {
            "id": "hunt_t_593 ",
            "name": "Elpis Minotaur"
        },
        {
            "id": "hunt_t_613 ",
            "name": "Gaja"
        },
        {
            "id": "hunt_t_526 ",
            "name": "Genomos"
        },
        {
            "id": "hunt_t_580 ",
            "name": "Gryps"
        },
        {
            "id": "hunt_t_573 ",
            "name": "Guhasaya"
        },
        {
            "id": "hunt_t_612 ",
            "name": "Hamsa"
        },
        {
            "id": "hunt_t_588 ",
            "name": "Harpuia"
        },
        {
            "id": "hunt_t_587 ",
            "name": "Hippe"
        },
        {
            "id": "hunt_t_543 ",
            "name": "Ilsabardian Tursus"
        },
        {
            "id": "hunt_t_541 ",
            "name": "Jotunn"
        },
        {
            "id": "hunt_t_611 ",
            "name": "Kacchapa"
        },
        {
            "id": "hunt_t_608 ",
            "name": "Labyrinth Screamer"
        },
        {
            "id": "hunt_t_599 ",
            "name": "Lambda"
        },
        {
            "id": "hunt_t_600 ",
            "name": "Level Tricker"
        },
        {
            "id": "hunt_t_607 ",
            "name": "Limascabra"
        },
        {
            "id": "hunt_t_591 ",
            "name": "Lotis"
        },
        {
            "id": "hunt_t_527 ",
            "name": "Luncheon Toad"
        },
        {
            "id": "hunt_t_590 ",
            "name": "Lykopersikon"
        },
        {
            "id": "hunt_t_614 ",
            "name": "Manjusaka"
        },
        {
            "id": "hunt_t_592 ",
            "name": "Melanion"
        },
        {
            "id": "hunt_t_581 ",
            "name": "Monoceros"
        },
        {
            "id": "hunt_t_589 ",
            "name": "Morbol Marquis"
        },
        {
            "id": "hunt_t_569 ",
            "name": "Mousse"
        },
        {
            "id": "hunt_t_609 ",
            "name": "Mythrilcap"
        },
        {
            "id": "hunt_t_529 ",
            "name": "Northern Snapweed"
        },
        {
            "id": "hunt_t_576 ",
            "name": "Odqan"
        },
        {
            "id": "hunt_t_579 ",
            "name": "Okyupete"
        },
        {
            "id": "hunt_t_577 ",
            "name": "Ophion"
        },
        {
            "id": "hunt_t_585 ",
            "name": "Ophiotauros"
        },
        {
            "id": "hunt_t_565 ",
            "name": "Osculator"
        },
        {
            "id": "hunt_t_603 ",
            "name": "Other One"
        },
        {
            "id": "hunt_t_545 ",
            "name": "Overgrown Rose"
        },
        {
            "id": "hunt_t_540 ",
            "name": "Ovibos"
        },
        {
            "id": "hunt_t_559 ",
            "name": "Panopt"
        },
        {
            "id": "hunt_t_586 ",
            "name": "Pegasos"
        },
        {
            "id": "hunt_t_530 ",
            "name": "Pephredo"
        },
        {
            "id": "hunt_t_584 ",
            "name": "Phanopsyche"
        },
        {
            "id": "hunt_t_610 ",
            "name": "Pisaca"
        },
        {
            "id": "hunt_t_557 ",
            "name": "Regolith"
        },
        {
            "id": "hunt_t_594 ",
            "name": "Remora"
        },
        {
            "id": "hunt_t_571 ",
            "name": "Scraper"
        },
        {
            "id": "hunt_t_532 ",
            "name": "Sotormurg"
        },
        {
            "id": "hunt_t_535 ",
            "name": "Starmite"
        },
        {
            "id": "hunt_t_601 ",
            "name": "Stellar Amphiptere"
        },
        {
            "id": "hunt_t_602 ",
            "name": "Stellar Brobinyak"
        },
        {
            "id": "hunt_t_570 ",
            "name": "Supporter"
        },
        {
            "id": "hunt_t_554 ",
            "name": "Sweeper"
        },
        {
            "id": "hunt_t_533 ",
            "name": "Thavnairian Jhammel"
        },
        {
            "id": "hunt_t_566 ",
            "name": "Thinker"
        },
        {
            "id": "hunt_t_558 ",
            "name": "Trimmer"
        },
        {
            "id": "hunt_t_605 ",
            "name": "Troll"
        },
        {
            "id": "hunt_t_575 ",
            "name": "Ufiti"
        },
        {
            "id": "hunt_t_531 ",
            "name": "Vajralangula"
        },
        {
            "id": "hunt_t_536 ",
            "name": "Valras"
        },
        {
            "id": "hunt_t_555 ",
            "name": "Wanderer"
        },
        {
            "id": "hunt_t_556 ",
            "name": "Weeper"
        },
        {
            "id": "hunt_t_528 ",
            "name": "Yakow"
        },
        {
            "id": "hunt_t_578 ",
            "name": "Yggdreant"
        },
        {
            "id": "hunt_b_t_54 ",
            "name": "Daphinia Magna"
        },
        {
            "id": "hunt_b_t_55 ",
            "name": "Emperor &#39;s Rose"
        },
        {
            "id": "hunt_b_t_62 ",
            "name": "Genesis Rock"
        },
        {
            "id": "hunt_b_t_59 ",
            "name": "Green Archon"
        },
        {
            "id": "hunt_b_t_60 ",
            "name": "Iravati"
        },
        {
            "id": "hunt_b_t_65 ",
            "name": "Level Cheater"
        },
        {
            "id": "hunt_b_t_63 ",
            "name": "Oskh Rhei"
        },
        {
            "id": "hunt_b_t_64 ",
            "name": "Shockmaw"
        },
        {
            "id": "hunt_b_t_58 ",
            "name": "Ü-u-ü-u"
        },
        {
            "id": "hunt_b_t_56 ",
            "name": "Vajrakumara"
        },
        {
            "id": "hunt_b_t_57 ",
            "name": "Warmonger"
        },
        {
            "id": "hunt_b_t_61 ",
            "name": "Yumcax"
        },
    ];

    let input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = "";
    input.focus();
    input.select();
    document.execCommand("paste");
    console.log(input.value);

    //Do everything we care about

    const hunts = input.value.split(" ")

    for (const h in hunts) {
        console.log(hunts[h])
        const hunt = hunts[h].trim();
        for (const hm in huntsMap) {
            knownHunt = huntsMap[hm];
            if (hunt === knownHunt.name) {
                let button = document.getElementById(knownHunt.id.trim());
                console.log("id: " + knownHunt.id)

                if(!button.checked){
                button.click();
                }
            }
        }
    }




    input.remove();
}
chrome.action.onClicked.addListener(async (tab) => {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });

    const nextState = prevState === 'ON' ? 'OFF' : 'ON'
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
      });
    console.log(tab.id);
    console.log("clicked");
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getClipboard
    })
});




