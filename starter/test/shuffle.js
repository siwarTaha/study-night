import { assert } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle()", () => {
  // The shuffle helper should preserve the deck size.
  it("should return an array of the same length", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shuffle(arr);

    assert.equal(result.length, arr.length);
  });

  // A shuffled deck should keep every original card.
  it("should contain all the same elements as the original array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shuffle(arr);

    assert.deepEqual([...result].sort(), [...arr].sort());
  });

  // Random shuffles can occasionally match the original, so sample several runs.
  it("should rearrange the indexes of the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const results = Array.from({ length: 10 }, () => shuffle([...arr]));
    const anyDifferent = results.some((result) => result.join() !== arr.join());

    assert.isTrue(
      anyDifferent,
      "Expected shuffle to change the order at least once",
    );
  });
});
