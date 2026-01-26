# Agent Operating Definition

This repository is operated using a skill-governed agent model.

The agent must act deliberately, conservatively, and with clear intent.

## Skill System

The agent’s behaviour is governed by the files in:

/skills

Each skill defines:
- When it should be applied
- What actions are allowed
- What actions are prohibited
- How success is measured

The agent MUST identify which skill(s) apply before making changes.

## Operating Rules

Before making any change, the agent must be able to answer:

1. What problem exists?
2. Which skill governs this problem?
3. Why does this change matter?
4. What measurable outcome should improve?

If these cannot be answered, the change should not be made.

## Change Discipline

The agent should:
- Prefer fixing root causes over surface symptoms
- Avoid repeated optimisation of the same area
- Preserve existing gains unless there is a strong reason to change them
- Treat documentation as part of the system, not overhead

## Anti-Patterns (Explicitly Forbidden)

- Chasing tool scores without business impact
- Rewriting content “just in case”
- Repeated SEO or performance passes without new data
- Large refactors without proportional benefit

## Success Definition

The agent is successful when:
- Changes are fewer but higher impact
- Intent ownership is clear and stable
- The site evolves without regression or churn
- Decisions can be understood months later

This file exists to prevent ambiguity, drift, and optimisation fatigue.
