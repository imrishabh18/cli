import { test, expect, describe } from "bun:test"
import { $ } from "bun"

test("soupify (core)", async () => {
  const result =
    await $`bun cli/cli.ts soupify --core -y --file ./example-project/examples/basic-chip.tsx`.text()

  expect(result).toContain("10000") // R1 resistor value
})
