module.exports = function(babel) {
  const { types: t } = babel;

  return {
    name: "wrap-all-functions-with-try-catch",
    visitor: {
      FunctionDeclaration(path) {
        wrapFunctionWithTryCatch(path);
      },
      FunctionExpression(path) {
        wrapFunctionWithTryCatch(path);
      },
      ArrowFunctionExpression(path) {
        wrapFunctionWithTryCatch(path);
      }
    }
  };

  function wrapFunctionWithTryCatch(path) {
    let body = path.node.body;
    let statements = [];

    // 检查函数体是否是块级语句
    if (t.isBlockStatement(body)) {
      statements = body.body;
    } else if (t.isExpression(body)) {
      // 如果函数体是表达式，需要将其包裹在一个 return 语句中
      statements = [t.returnStatement(body)];
      body = t.blockStatement(statements); // 更新 body 为块级语句
    }

    // 创建 try-catch 块
    const tryCatchBlock = t.tryStatement(
      body,
      t.catchClause(
        t.identifier('error'), // 捕获的错误变量名
        t.blockStatement([
          // 在 catch 块中抛出错误
          t.throwStatement(t.identifier('error'))
        ])
      )
    );

    // 用 try-catch 块替换原有函数体
    path.node.body = t.isExpression(body)
      ? tryCatchBlock
      : t.blockStatement([tryCatchBlock]);
  }
};
