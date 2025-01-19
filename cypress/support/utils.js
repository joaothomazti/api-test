export const verifyResponseBody = (response, expectedProperties) => {
    Object.entries(expectedProperties).forEach(([key, value]) => {
      expect(response.body).to.have.property(key, value);
    });
  };