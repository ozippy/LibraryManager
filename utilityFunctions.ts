export function Purge<T>(inventory: Array<T>) : Array<T> {
    return inventory.splice(2, inventory.length);
}