import { mount } from "@vue/test-utils";
import counter from "@/components/counter.vue";
import sinon from 'sinon'

describe("counter.vue", () => {
  let isCalled = false;
  const change = sinon.spy();
  const wrapper = mount(counter,{
  listeners:{
    change
  }
  });
  it("renders couter html", () => {
    const msg = "new message";
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("counter++",()=>{
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);
    expect(change.called).toBe(true);
  })
});
