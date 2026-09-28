import assert from "node:assert";
import { shortOf, enoughAt, addedInto } from "../shortfall.js";
import { step, close } from "../fallrun.js";
import { render } from "../app.js";

const base = {
  budget: 1, quota: 2,
  state: { groups: [], shortfall: [], audits: 0, queries: [], ledger: [], applied: [] },
  events: [{ id: 1, kind: "add", group: "a", value: 1 }],
  bad_group_code: "E_BAD_GROUP", bad_value_code: "E_BAD_VALUE",
  empty_code: "E_EMPTY", no_group_code: "E_NO_GROUP",
  event_error_code: "E_BAD_EVENT"
};

let failed = 0;
function check(name, fn) {
  try { fn(); console.log("ok " + name); } catch (e) { failed += 1; console.log("FAIL " + name + " :: " + e.message); }
}

check("shortOf returns a number", () => {
  assert.strictEqual(typeof shortOf(1, 3), "number");
});

check("enoughAt returns a boolean", () => {
  assert.strictEqual(typeof enoughAt(1, 3), "boolean");
});

check("addedInto returns a list", () => {
  assert.ok(Array.isArray(addedInto([], "a", 1)));
});

check("step returns a state", () => {
  assert.strictEqual(typeof step(base).state, "object");
});

check("render counts events", () => {
  assert.strictEqual(typeof render(base).count_events, "number");
});

console.log("5 cases, " + failed + " failed");
process.exit(failed === 0 ? 0 : 1);
