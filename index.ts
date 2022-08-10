import { style } from "twind/style";

const variants = style({
  variants: {
    layout: {
      columns: "grid-flow-col",
      rows: "grid-flow-row",
    },
  },
});

type VariantParams = Parameters<typeof variants>[0];

export type ComponentProps = VariantParams & {
  disabled?: boolean;
};

export type AlternateComponentProps = {
  layout: VariantParams["layout"];
  disabled?: boolean;
};
