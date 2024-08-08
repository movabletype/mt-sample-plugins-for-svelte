export function recalcHeight(droppableArea) {
  // Calculate droppable area height
  const contentFields = droppableArea.getElementsByClassName("mt-contentfield");
  let clientHeight = 0;
  for (let i = 0; i < contentFields.length; i++) {
    clientHeight += (contentFields[i]).offsetHeight;
  }
  if (clientHeight >= droppableArea.clientHeight) {
    // eslint-disable-next-line no-undef
    jQuery(droppableArea).height(clientHeight + 100);
  } else {
    if (clientHeight >= 400) {
      // eslint-disable-next-line no-undef
      jQuery(droppableArea).height(clientHeight + 100);
    } else {
      // eslint-disable-next-line no-undef
      jQuery(droppableArea).height(400 - 8);
    }
  }
}
