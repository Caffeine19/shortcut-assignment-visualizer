export type Shortcut = {
  key: string;
  control?: boolean;
  command?: boolean;
  option?: boolean;
  shift?: boolean;
  appIcon: string; // Changed from function to direct string reference
  tool: string; // Added tool property to identify the application
  colors?: {
    primary: string;
    secondary: string;
  };
  actionName: string;
};
