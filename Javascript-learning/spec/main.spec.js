let querySelectorSpy;
describe('main.js', () => {
  beforeEach(() => {
    const ele = [
      {
        classList: {
          add: function (className) {},
        },
        addEventListener: (eventType, callbackFn) => {},
      },
    ];

    spyOn(document, 'getElementsByClassName').and.returnValue(ele);

    querySelectorSpy = spyOn(document, 'querySelector');
    querySelectorSpy.and.returnValue(ele[0]);
  });

  it('invoking addButtonHandlers', () => {
    querySelectorSpy.and.returnValue({
      classList: {
        add: function (className) {},
      },
    });

    addButtonHandlers();

    expect(document.getElementsByClassName).toHaveBeenCalled();

    expect(document.getElementsByClassName).toHaveBeenCalledWith(
      'click-here-btn'
    );

  });

  it('invoking addCloseHandlers', () => {
    querySelectorSpy.and.returnValue({
      classList: {
        add: function (className) {},
      },
    });

    addCloseHandlers();

    expect(document.getElementsByClassName).toHaveBeenCalled();

    expect(document.getElementsByClassName).toHaveBeenCalledWith('close');
  });
});
