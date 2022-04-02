import * as fs from 'fs'
import path from 'path'

export function created_file(name_file) {
    let res = fs.appendFileSync(name_file, 'new file')
}

export function get_file(name_file) {
    let res = fs.readFileSync(name_file,'utf8')
    if(res){
        console.log(res)
        // return res
    }else{
        console.log(res)
        console.log('file not found. ')
    }
}

export function get_all_files() {
    console.log('get file. ')
}

export function destroy_file() {
    console.log('get file. ')
}

export function read_file() {
    console.log('get file. ')
}

export function write_file() {
    console.log('get file. ')
}

