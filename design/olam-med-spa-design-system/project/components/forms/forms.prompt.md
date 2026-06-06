**Input / Textarea / Select** — OLAM form fields. Warm white field, hairline border, 8px radius, tracked-uppercase label, blue focus ring + soft halo. Use for the reservation/consultation form.

```jsx
<Input label="First name" id="first" placeholder="Enter your first name" required />
<Input label="Phone" id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
<Select label="Primary concern" id="concern" placeholder="Select an area"
        options={["Jawline & neck", "Cheeks & mid-face", "Crepey skin", "Brow & eyes"]} />
<Textarea label="Anything else?" id="notes" rows={4} />
```

- Labels are optional but recommended; `required` adds a blue asterisk.
- All three share the same focus treatment. Submit with the `Button` component (`type="submit"`).
