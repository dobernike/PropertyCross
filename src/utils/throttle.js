function throttle(func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper(...arg) {
        if (isThrottled) {
            savedArgs = arg;
            savedThis = this;
            return;
        }

        func.apply(this, arg);

        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;

            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = null;
                savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

export default throttle;
