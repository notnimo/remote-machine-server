import { Field, FieldDescription, FieldLabel } from "@/src/components/field";
import { Input } from "@/src/components/input";

import { PickerContent } from "@/src/lib/file-picker-content";

export function FilePicker({ content }: { content: PickerContent }) {
  return (
    <div className="max-w-xl">
      <Field>
        <FieldLabel htmlFor="fileInput">{content.label}</FieldLabel>
        <Input id="fileInput" type="file" accept={content.accept} />
        <FieldDescription>{content.description}</FieldDescription>
      </Field>
    </div>
  );
}
