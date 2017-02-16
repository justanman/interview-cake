// queue with 2 stacks
// also known as a Quack 😛

function Quack() {
  this.in = []
  this.out = []
}

Quack.prototype.enqueue = function(item) {
  this.in.push(item);
}
Quack.prototype.dequeue = function() {
  if (this.out.length === 0) {
    // move items in to out (reverse order)
    while (this.in.length > 0) {
      var newestInStackItem = this.in.pop();
      this.out.push(newestInStackItem);
    }
  }
  return this.out.pop();
}
