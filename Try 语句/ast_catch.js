const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const types = require('@babel/types');


// 示例代码
const code = `
  function fun() {
    console.log('Hello, world!');
  }

  const fun2 = function(){
    console.log("I'am func2")
  }
`;


// 遍历选项
const traverseOptions = {
  FunctionDeclaration(path) {
    // 创建 try-catch 块
    const tryCatchBlock = types.tryStatement(
      types.blockStatement(path.node.body.body),
      types.catchClause(
        types.identifier('error'),
        types.blockStatement([
          types.throwStatement(types.identifier('error'))
        ])
      )
    );

    // 替换原有函数体
    path.node.body = types.blockStatement([tryCatchBlock]);
  },
  FunctionExpression(path) {
    // 创建 try-catch 块
    const tryCatchBlock = types.tryStatement(
      types.blockStatement(path.node.body.body),
      types.catchClause(
        types.identifier('error'),
        types.blockStatement([
          types.throwStatement(types.identifier('error'))
        ])
      )
    );

    // 替换原有函数体
    path.node.body = types.blockStatement([tryCatchBlock]);
  },
  // 如果需要，也可以为其他函数添加 try...catch
};


// 解析代码为 AST
const ast = parser.parse(code);

// 使用 traverse 遍历个更新节点
traverse(ast, traverseOptions);

// 生成修改后的代码
const outputCode = generate(ast);

console.log(outputCode.code);
