import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

// fetches data from the file system
export function getSortedPostsData() {
    // get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        // remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    // sort posts by date
    return allPostsData.sort(({date: a}, {date: b}) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}

// returns list of file names excluding .md in the posts dir
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]

    // Important: The returned list is not just an array of strings
    // — it must be an array of objects that look like the comment above.
    // Each object must have the params key and contain an object with the
    // id key (because we’re using [id] in the file name). Otherwise, getStaticPaths will fail.

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '') // get id and remove file extension
            }
        }
    })
}

// returns the post data based on id
export function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // combine data with the id
    return {
        id,
        ...matterResult.data
    }
}