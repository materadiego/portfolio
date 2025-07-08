import styles from "./LayoutContainer.module.scss";

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.LayoutContainer}>{children}</div>;
};

export { LayoutContainer };
