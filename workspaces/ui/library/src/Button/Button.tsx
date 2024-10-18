import type { FunctionComponent, PropsWithChildren } from "react"
import { clsx } from "clsx"

import styles from "./Button.module.css"

type ButtonProps = {
  className?: string
}

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = (props) => {
  const { children, className, ...rest } = props
  const classNames = clsx(styles.button, className)

  return (
    <button {...rest} className={classNames}>
      {children}
    </button>
  )
}
