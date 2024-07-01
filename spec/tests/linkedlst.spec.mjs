import LinkedList from "../../modules/LinkedList/LinkedList.mjs";

describe("Linked List", function() {
        const list = LinkedList('tree', 'oak')
    it("Created new LinkedList object and expect it to contain tree: oak, next:null", function() {
        const a = list.node
        expect(a).toEqual({'tree': 'oak', next: null});
        }
    );
    it('Get the tree key and return oak', function() {
        const b = list.get('tree')
        expect(b).toEqual('oak');
    })
});