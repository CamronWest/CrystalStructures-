"""empty message

Revision ID: fe1de29f71b9
Revises: 
Create Date: 2023-04-07 15:19:47.603819

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fe1de29f71b9'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('problem',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('contents', sa.String(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=20), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('password', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('solution',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('solution_name', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], name=op.f('fk_solution_user_id_user')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_graph',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('contents', sa.String(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('problem_id', sa.Integer(), nullable=True),
    sa.Column('solution_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['problem_id'], ['problem.id'], name=op.f('fk_user_graph_problem_id_problem')),
    sa.ForeignKeyConstraint(['solution_id'], ['solution.id'], name=op.f('fk_user_graph_solution_id_solution')),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], name=op.f('fk_user_graph_user_id_user')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_graph')
    op.drop_table('solution')
    op.drop_table('user')
    op.drop_table('problem')
    # ### end Alembic commands ###
