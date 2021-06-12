import ratingByHealth from './../matchers';

test ('changing array by health rate', () => {
  const warriors = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  const expexted = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];
  expect(ratingByHealth(warriors)).toBe(expexted);
  expect(ratingByHealth(warriors)).toEqual(expexted);

})