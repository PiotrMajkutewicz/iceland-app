import * as MaterialIcons from "@mui/icons-material";

export const getIcon = (iconName = 'Home') => {
  try {
    const isIconValid = MaterialIcons[iconName] !== undefined;
    const IconComponent = isIconValid
      ? MaterialIcons[iconName]
      : MaterialIcons.Error;

    return IconComponent;
  } catch (error) {
    console.error(error);
    return MaterialIcons.Error;
  }
};
