import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  })

  it('should increment totalvotes when upvoted', () => {
    // Arrange
    // let component = new VoteComponent();
    // Act
    component.upVote();
    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalvotes when downvoted', () => {
    // Arrange
    // let component = new VoteComponent();
    // Act
    component.downVote();
    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});
