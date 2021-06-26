// check if variable/key is empty or not
export const isEmpty = (item: any) => {
    return (
      item === null ||
      item === undefined ||
      item === false ||
      item.length === 0 ||
      item === ''
    );
  };
  
  // check if variable is of array type
  export const isArray = (obj: any) => {
    return typeof obj === 'object' && obj.constructor === Array;
  };
  
  // convert anything into integer
  export const convertToNumber = (number: any, base = 10) => {
    const parsed = parseInt(number, base);
    if (isNaN(parsed)) {
      return 0;
    }
    return parsed;
  };
  
  // check for valid url
  export const CheckValidUrl = (url:any) => {
    try {
      new URL(url);
    } catch (_) {
      return false;
    }
    return true;
  };
  
  // remove null keys from object
//   export const RemoveNullKeys = (objectData:any) => {
//     return Object.entries(objectData)
//       .filter(([_, value]) => value != null)
//       .reduce(
//         (acc, [k, value]) => ({
//           ...acc,
//           [k]: value === Object(value) ? RemoveNullKeys(value) : value,
//         }),
//         {},
//       );
//   };
  