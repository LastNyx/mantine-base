import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

type Props = {
  disabled?: boolean;
} & LinkProps;

const ToggleableLink = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { disabled = false, ...rest } = props;
  return (
    <div ref={ref}>
      {disabled ? props.children : <Link {...rest}>{props.children}</Link>}
    </div>
  );
});

export default ToggleableLink;
