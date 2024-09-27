function doSomething() {
    try {
        throw new Error(`10点精血, 桀桀桀`)
        return 'result';
    } catch (err) {
        console.log(`报错了哦`)
        return undefined
    }
    finally {
        // 其他清理工作
        console.log('清理：')
    }
}