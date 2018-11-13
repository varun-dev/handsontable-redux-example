import faker from 'faker'

export const fields = [ 'lastName', 'firstName', 'jobTitle', 'prefix', 'suffix', 'title', 'jobDescriptor', 'jobArea' ]

export function getArrayData(dataSize) {
  console.time('getArrayData')
  const data = new Array(dataSize).fill(null)
    .map(e => e = fields.map(key => faker.name[key]()))
  console.timeEnd('getArrayData')
  return data
}

export function getObjectData(dataSize) {
  console.time('getObjectData')
  const data = new Array(dataSize).fill(undefined)
    .map((e = {}) => {
      fields.forEach(key => e[key] = faker.name[key]())
      return e
    })
  console.timeEnd('getObjectData')
  return data
}
