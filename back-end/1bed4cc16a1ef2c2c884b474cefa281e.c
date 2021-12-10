#include<stdio.h>
#include<stdlib.h>
int g=0;
struct node
{
    struct node* left;
    int data;
    struct node* right;
};

struct node* createnode(int data)
{
    struct node* temp=malloc(sizeof(struct node));
    temp->left=NULL;
    temp->data=data;
    temp->right=NULL;
    return temp;
}

void inorder(struct node* root)
{
    if (root)
    {
        inorder(root->left);
        printf("VISITED NODE%d\n",root->data);
        inorder(root->right);
    }
}


int main()
{
    struct node* head=createnode(10000);
    head->left=createnode(9000);
    head->right=createnode(11000);
    head->left->left=createnode(8500);
    head->left->right=createnode(9500);
    head->right->left=createnode(10500);
    head->right->right=createnode(11500);
    inorder(head);  
}


int rsrsaser=0;