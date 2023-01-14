import{_ as a,p as e,q as t,a1 as h}from"./framework-7db056f4.js";const p={},i=h('<h1 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表" aria-hidden="true">#</a> 哈希表</h1><p>首先什么是 哈希表，哈希表（英文名字为 Hash table，国内也有一些算法书籍翻译为散列表，大家看到这两个名称知道都是指 hash table 就可以了）。</p><p>哈希表是根据关键码的值而直接进行访问的数据结构。</p><p>这么这官方的解释可能有点懵，其实直白来讲其实数组就是一张哈希表。</p><p>哈希表中关键码就是数组的索引下标，然后通过下标直接访问数组中的元素，如下图所示：</p><p><img src="https://user-images.githubusercontent.com/94043894/188271985-e34b0544-c396-4e3a-b848-ad583dc6f938.png" alt="image"></p><p>那么哈希表能解决什么问题呢，<b>一般哈希表都是用来快速判断一个元素是否出现集合里</b>。</p><p>例如要查询一个名字是否在这所学校里。</p><p>要枚举的话时间复杂度是 O(n)，但如果使用哈希表的话， 只需要 O(1)就可以做到。</p><p>我们只需要初始化把这所学校里学生的名字都存在哈希表里，在查询的时候通过索引直接就可以知道这位同学在不在这所学校里了。</p><p>将学生姓名映射到哈希表上就涉及到了 hash function ，也就是哈希函数</p><h2 id="哈希函数" tabindex="-1"><a class="header-anchor" href="#哈希函数" aria-hidden="true">#</a> 哈希函数</h2><p>哈希函数，把学生的姓名直接映射为哈希表上的索引，然后就可以通过查询索引下标快速知道这位同学是否在这所学校里了。</p><p>哈希函数如下图所示，通过 hashCode 把名字转化为数值，一般 hashcode 是通过特定编码方式，可以将其他数据格式转化为不同的数值，这样就把学生名字映射为哈希表上的索引数字了。</p><p><img src="https://user-images.githubusercontent.com/94043894/188272110-d65dba02-4798-4b2e-b47b-26ea9a36aa12.png" alt="image"></p><p>如果 hashCode 得到的数值大于 哈希表的大小了，也就是大于 tableSize 了，怎么办呢？</p><p>此时为了保证映射出来的索引数值都落在哈希表上，我们会在再次对数值做一个取模的操作，就要我们就保证了学生姓名一定可以映射到哈希表上了。</p><p>此时问题又来了，哈希表我们刚刚说过，就是一个数组。</p><p>如果学生的数量大于哈希表的大小怎么办，此时就算哈希函数计算的再均匀，也避免不了会有几位学生的名字同时映射到哈希表 同一个索引下标的位置。</p><p>接下来<b>哈希碰</b>登场</p><h2 id="哈希碰撞" tabindex="-1"><a class="header-anchor" href="#哈希碰撞" aria-hidden="true">#</a> 哈希碰撞</h2><p>如图所示，小李和小王都映射到了索引下标 1 的位置，<b>这一现象叫做哈希碰</b>。</p><p><img src="https://user-images.githubusercontent.com/94043894/188273537-471f3104-ccec-4e4e-87a5-9d964ee6d87a.png" alt="image"></p><p>一般哈希碰撞有两种解决方法， 拉链法和线性探测法。</p><h3 id="拉链法" tabindex="-1"><a class="header-anchor" href="#拉链法" aria-hidden="true">#</a> 拉链法</h3><p>刚刚小李和小王在索引 1 的位置发生了冲突，发生冲突的元素都被存储在链表中。 这样我们就可以通过索引找到小李和小王了</p><p><img src="https://user-images.githubusercontent.com/94043894/188273628-f76018a7-fd72-4f22-bfbc-2655312454ba.png" alt="img"></p><p>（数据规模是 dataSize， 哈希表的大小为 tableSize）</p><p>其实拉链法就是要选择适当的哈希表的大小，这样既不会因为数组空值而浪费大量内存，也不会因为链表太长而在查找上浪费太多时间。</p><h3 id="线性探测法" tabindex="-1"><a class="header-anchor" href="#线性探测法" aria-hidden="true">#</a> 线性探测法</h3><p>使用线性探测法，一定要保证 tableSize 大于 dataSize。 我们需要依靠哈希表中的空位来解决碰撞问题。</p><p>例如冲突的位置，放了小李，那么就向下找一个空位放置小王的信息。所以要求 tableSize 一定要大于 dataSize ，要不然哈希表上就没有空置的位置来存放 冲突的数据了。如图所示：</p><p><img src="https://user-images.githubusercontent.com/94043894/188274033-f3259130-ebc4-4410-a853-00b6347588c4.png" alt="image"></p><h2 id="整数哈希" tabindex="-1"><a class="header-anchor" href="#整数哈希" aria-hidden="true">#</a> 整数哈希</h2><h2 id="字符串哈希-哈希函数" tabindex="-1"><a class="header-anchor" href="#字符串哈希-哈希函数" aria-hidden="true">#</a> 字符串哈希（哈希函数）</h2><h2 id="滚动哈希" tabindex="-1"><a class="header-anchor" href="#滚动哈希" aria-hidden="true">#</a> 滚动哈希</h2>',36),r=[i];function s(d,c){return e(),t("div",null,r)}const o=a(p,[["render",s],["__file","02-哈希表.html.vue"]]);export{o as default};
