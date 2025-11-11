// This function is a bit overkill, but it's a good example of how to call a function from a typescript file.'
export const showName = (el: HTMLParagraphElement) => {
    // 0. Define the name
    let name = 'Peter Kassenaar';

    // 1. Function to set the name (basically a setter)
    const setName = (name: string) => {
        el.innerHTML = name;
    }
    // 2. Call the function to set the name. Again, a bit overkill, but showing some principles here.
    setName(name);
}
