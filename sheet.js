on('clicked:roll_initiative', function() {
  startRoll(`@{whispertoggle}&{template:naruto} {{name=Initiative}} {{description=Initiative Check}} {{roll=[[1d20 + @{initiative}]]}}`, (results) => {
    const base = results.results.roll.rolls[0].results[0].v;
    const bonus = results.results.roll.modifier || 0;
    const final = base + bonus;

    finishRoll(results.rollId, {
      roll: final
    });
  });
});
