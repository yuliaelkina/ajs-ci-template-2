import healthRate from './../function';

test ('string description of health rate', ()=> {
  const healthyHero = {name: "Legolas", rate: 95};
  const woundedHero = {name: "Gimli", rate: 43};
  const criticalHero = {name: "Sauron", rate: 11};

  const healthyResult = healthRate(healthyHero);
  const woundedResult = healthRate(woundedHero);
  const criticalResult = healthRate(criticalHero);

  expect(healthyResult).toBe("healthy");
  expect(woundedResult).toBe("wounded");
  expect(criticalResult).toBe("critical");
})