import{_ as t,M as l,p as s,q as r,R as a,t as n,N as o,a1 as i}from"./framework-7db056f4.js";const h={},c=i('<h1 id="mybatis-简介" tabindex="-1"><a class="header-anchor" href="#mybatis-简介" aria-hidden="true">#</a> MyBatis 简介</h1><h2 id="mybatis-历史" tabindex="-1"><a class="header-anchor" href="#mybatis-历史" aria-hidden="true">#</a> MyBatis 历史</h2><ul><li><p>MyBatis 最初是 Apache 的一个开源项目 iBatis, 2010年6月 这个项目由 Apache Software Foundation 迁移到了 Google Code。随着开发团队转投 Google Code 旗下，iBatis3.x 正式更名为 MyBatis。代码于 2013年11月 迁移到 Github</p></li><li><p>iBatis 一词来源于“internet”和“abatis”的组合，是一个基于 Java 的持久层框架。iBatis 提供的持久层框架包括 SQL Maps 和 Data Access Objects（DAO）</p></li></ul><h2 id="mybatis-特性" tabindex="-1"><a class="header-anchor" href="#mybatis-特性" aria-hidden="true">#</a> MyBatis 特性</h2><ol><li><p>MyBatis 是支持定制化 SQL、存储过程以及高级映射的优秀的持久层框架</p></li><li><p>MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集</p></li><li><p>MyBatis 可以使用简单的 XML 或注解用于配置和原始映射，将接口和 Java 的 POJO（Plain Old Java Objects，普通的 Java 对象）映射成数据库中的记录</p></li><li><p>MyBatis 是一个 半自动的 ORM（Object Relation Mapping）框架</p></li></ol><h2 id="mybatis-下载" tabindex="-1"><a class="header-anchor" href="#mybatis-下载" aria-hidden="true">#</a> MyBatis 下载</h2>',6),d={href:"https://github.com/mybatis/mybatis-3",target:"_blank",rel:"noopener noreferrer"},p=i('<h2 id="和其它持久层技术对比" tabindex="-1"><a class="header-anchor" href="#和其它持久层技术对比" aria-hidden="true">#</a> 和其它持久层技术对比</h2><ul><li>JDBC <ul><li>SQL 夹杂在 Java 代码中耦合度高，导致硬编码内伤</li><li>维护不易且实际开发需求中 SQL 有变化，频繁修改的情况多见</li><li>代码冗长，开发效率低</li></ul></li><li>Hibernate 和 JPA <ul><li>操作简便，开发效率高</li><li>程序中的长难复杂 SQL 需要绕过框架</li><li>内部自动生产的 SQL，不容易做特殊优化</li><li>基于全映射的全自动框架，大量字段的 POJO 进行部分映射时比较困难。</li><li>反射操作太多，导致数据库性能下降</li></ul></li><li>MyBatis <ul><li>轻量级，性能出色</li><li>SQL 和 Java 编码分开，功能边界清晰。Java 代码专注业务、SQL 语句专注数据</li><li>开发效率稍逊于 HIbernate，但是完全能够接受</li></ul></li></ul>',2);function b(u,y){const e=l("ExternalLinkIcon");return s(),r("div",null,[c,a("p",null,[a("a",d,[n(" Github "),o(e)])]),p])}const _=t(h,[["render",b],["__file","01-MyBatis.html.vue"]]);export{_ as default};