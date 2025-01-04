---
theme: ./
---

# Slidev Theme Starter

Presentation slides for developers

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" flex="~ justify-center items-center gap-2" hover="bg-white bg-opacity-10">
    Press Space for next page <div class="i-carbon:arrow-right inline-block"/>
  </span>
</div>

---
layout: kintone
---

::title::

# neco背景

::content::

<div class="mt-16">

- 使用 **多租户模式**。

- 最大的用户就是我们的 **kin**。
  
</div>

---
layout: two-cols-kintone
---

::title::

# 环境类型

::left::

## 开发环境 <carbon-development class="inline"/>

- 用于测试、验证和性能评估
- 可从内部业务终端访问
- 维护周期：月度重启
- 资源受限，部分环境仅限特定团队使用

::right::

## 生产环境 <carbon-cloud class="inline"/>

- 维护周期：季度重启
- 完整的容灾备份机制

::bottom::
<div class="ft-12 text-gray-500">
*注：目前部署于多个数据中心（TY3/MDC），支持跨中心集群部署
</div>
---
layout: image-right
image: https://cover.sli.dev
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: center
class: "text-center"
---

# Learn More

[Documentation](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
