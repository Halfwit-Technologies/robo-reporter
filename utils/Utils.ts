import Post from "../interfaces/Post";

function sortArticles(items: Post[]) {
    let len = items.length

    for (let i = 0; i < len; i++) {
        let cur = items[i]

        let j = i - 1;
        while ((j > -1) && (cur.createdAt < items[j].createdAt)) {
            items[j + 1] = items[j]
            j--;
        }

        items[j+1] = cur
    }

    return items
}

[
    {
        one: '1',
        two: '2'
    },
    {
        one: '3',
        two: '4'
    }
][0]['one']


function sort(items: any[], search?: string) {
    let len = items.length

    for (let i = 0; i < len; i++) {
        let cur = items[i]

        let j = i - 1;
        while ((j > -1) && (cur.createdAt < items[j].createdAt)) {
            items[j + 1] = items[j]
            j--;
        }

        items[j+1] = cur
    }

    return items
}

export { sort, sortArticles }