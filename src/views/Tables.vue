<template>
  <div>
    <div>
      <input type="text" class="border-2 mb-5 rounded h-10 p-2" placeholder="Search" @input="onSearch">
    </div>
    <div>
      <table class="bg-sky-300">

        <thead>
          <tr>
            <th v-for="(column, index) in columns" v-bind:key="index" class="border-2 p-2 text-left"
              v-on:click="sortRecords(index)">
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in rows" v-bind:key="index">
            <td v-for="(rowItem, itemIndex) in row" v-bind:key="itemIndex" class="border-2 p-2 ">
              {{ rowItem }}
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script>

const performSearch = (rows, term) => {
  const results = rows.filter(
    row => row.join(" ").toLowerCase().includes(term.toLowerCase())
  )
  return results;
}
export default {
  name: 'Tables',
  data() {
    return {
      term: '',
      rawRows: [["John", 12, 2, "Lincoln High", 0, 201, 299],
      ["Johana", 10, 1, "Lincoln High", 10, 100, 152],
      ["Riley", 9, 0, "Lincoln High", 10, 20, 20],
      ["Roo", 13, 4, "Lincoln High", 21, 173, 534],
      ["Ethan", 13, 5, "Lincoln High", 37, 232, 798],
      ["Shivam", 9, 0, "Lincoln High", 0, 4, 4],
      ["Leon", 11, 1, "Lincoln High", 2, 20, 53],
      ["Anas", 13, 5, "Lincoln High", 36, 230, 804],
      ["Michael", 13, 5, "Burnside High", 43, 222, 801]
      ],
      rows: [],
      columns: [
        'Name (or username)           ',
        'Year level',
        'Years in RAD',
        'School',
        'Compt fxd (month)',
        'Compt fxd (year)',
        'Compt fxd (total)',
      ],
      sortIndex: null,
      sortDirection: null,

    }
  },
  methods: {
    onSearch(e) {
      const term = e.target.value;
      this.rows = performSearch(this.rawRows, term)

    },
    sortRecords(index) {
      if (this.sortIndex === index) {
        switch (this.sortDirection) {
          case null:
            this.sortDirection = "asc";
            break;
          case "asc":
            this.sortDirection = "desc";
            break;
          case "desc":
            this.sortDirection = null
            break;
        }
      } else {
        this.sortDirection = "asc";
      }
      this.sortIndex = index;


      if (!this.sortDirection) {
        this.rows = performSearch(this.rawRows, this.term);
        return;
      }
      this.rows = this.rows.sort(
        (rowA, rowB) => {
          if (this.sortDirection === 'desc') {
            return rowB[index] - rowA[index];
          }

          return rowA[index] - rowB[index];
        }
      )
    }
  },
  mounted() {
    this.rows = [...this.rawRows];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
