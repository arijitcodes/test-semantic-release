export const sayHi = (name: string | null = null): void => {
  if (!name) {
    console.log("Hello World!");
  } else {
    console.log(`Hello ${name}! 🙋🏻‍♂️`);
  }
};
