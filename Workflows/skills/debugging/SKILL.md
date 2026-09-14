# Debugging Skill

## Purpose

Provide a disciplined, reusable method for finding and correcting unexpected behavior.

## Method

1. Define expected behavior and actual behavior.
2. Gather evidence from errors, logs, output, inputs, configuration, and runtime behavior before editing.
3. Reproduce the problem when possible.
4. Narrow the affected area and isolate relevant variables.
5. Form explicit hypotheses about the likely cause.
6. Design a small test for each useful hypothesis.
7. Compare the evidence with the hypothesis and eliminate unsupported explanations.
8. Identify the root cause and distinguish it from secondary symptoms.
9. Implement a targeted fix only after sufficient investigation.
10. Verify that the original problem is resolved.
11. Run relevant regression checks.
12. Report any uncertainty when the root cause cannot be proven.

## Mental Model

~~~
evidence
→ hypothesis
→ test
→ root cause
→ targeted fix
→ verification
~~~

## Avoid

- Random trial-and-error edits
- Changing several unrelated variables at once
- Fixing only a visible symptom without considering the cause
- Claiming certainty that the evidence does not support
