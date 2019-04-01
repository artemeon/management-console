<template>
  <div>
    <div @click="nodeClicked" :style="{'margin-left': `${depth * 20}px`}" class="node">
      <span v-if="hasChildren" class="type">{{expanded ? '&#9660;' : '&#9658;'}}</span>
      <span class="type" v-else>&#9671;</span>
      <span :style="getStyle(node)">{{node.name}}</span>
    </div>
    <TreeView
      v-if="expanded"
      v-for="child in node.children"
      :key="child.name"
      :node="child"
      :depth="depth + 1"
      @onClick="(node) => $emit('onClick', node)"
    />
  </div>
</template>
